package com.employees;
import javax.persistence.*;

@Entity
@Table(name = "Employees")
public class Employees {

    @Column(name = "emp_no")
    @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
    private int empNo;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    protected Employees(){};

    public Employees(String firstName, String lastName){
        this.empNo = empNo;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getEmpNo(){
        return empNo;
    }
    public String getFirstName(){
        return firstName;
    }
    public String getLastName(){
        return lastName;
    }

    public void setEmpNo(int empNo){
        this.empNo = empNo;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }
    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    @Override
    public String toString(){
        return "Employee[ID = " + empNo + ", First Name = " + firstName + ", Last Name = " + lastName + "]";
    }





}
