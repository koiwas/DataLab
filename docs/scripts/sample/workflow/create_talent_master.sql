DROP TABLE IF EXISTS sandbox.talent_master;

CREATE TABLE sandbox.talent_master AS
	SELECT
		e.employee_id,
		e.employee_name,
		e.gender,
		e.department_id,
		d.department_name,
		current_timestamp AT TIME ZONE 'UTC' AS created_ad
	FROM sandbox.employee AS e
	JOIN sandbox.department AS d USING (department_id);
;
