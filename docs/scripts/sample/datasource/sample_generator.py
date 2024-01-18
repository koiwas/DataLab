import random
import csv
from io import StringIO

def main():
    generate_csv()

def generate_employee_data(num):
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
        department_id = random.randint(1, 10)
        if gender == 'MALE':
            name = f'{random.choice(last_names)}{random.choice(first_names_male)}'
        else:
            name = f'{random.choice(last_names)}{random.choice(first_names_female)}'
        data.append([employee_id, name, gender, department_id])

    return data

def generate_department_data():
    # 属性データ
    departments = [[1, '営業部'], [2, '総務部'], [3, '経理部'], [4, '開発部'], [5, '人事部'], [6, '広報部'], [7, '企画部'], [8, '販売部'], [9, '購買部'], [10, '生産部']]

    return departments

def write_csv(filename, columns, data):
    file = StringIO()
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)

    csv_data = file.getvalue()
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        f.write(csv_data)

def generate_csv(num=100):
    # 従業員データの生成とcsvファイルへの書き込み
    employee_columns = ['employee_id', 'employee_name', 'gender', 'department_id']
    employee_data = generate_employee_data(num)
    write_csv('employee.csv', employee_columns, employee_data)

    # 部署データの生成とcsvファイルへの書き込み
    department_columns = ['department_id', 'department_name']
    department_data = generate_department_data()
    write_csv('department.csv', department_columns, department_data)

if __name__ == '__main__':
    main()
