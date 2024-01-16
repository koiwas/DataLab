import random
import csv
from io import StringIO

def main():
    generate_csv()

def generate_sample_data(num):
    # 属性データ
    genders = ['MALE', 'FEMALE']
    first_names_male = ['太郎', '次郎', '三郎', '四郎', '五郎']
    first_names_female = ['花子', '紀子', '美子', '恵子', '由美子']
    last_names = ['佐藤', '鈴木', '高橋', '田中', '渡辺', '山田', '伊藤', '中村', '小林', '加藤']

    # 性別に応じた名前の生成
    data = []
    for i in range(1, num+1):
        employee_id = f'E{str(i).zfill(4)}'
        gender = random.choice(genders)
        if gender == 'MALE':
            name = f'{random.choice(last_names)}{random.choice(first_names_male)}'
        else:
            name = f'{random.choice(last_names)}{random.choice(first_names_female)}'
        data.append([employee_id, name, gender])

    return data

def generate_csv(num=100):
    # カラム名
    columns = ['EMPLOYEE_ID', 'EMPLOYEE_NAME', 'GENDER']

    # サンプルデータの生成
    data = generate_sample_data(num)
    file = StringIO()
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)

    # csvファイルの生成
    csv_data = file.getvalue()
    with open('employee.csv', 'w', newline='', encoding='utf-8') as f:
        f.write(csv_data)

    # サンプルデータの表示
    print(csv_data[:100])

if __name__ == '__main__':
    main()
