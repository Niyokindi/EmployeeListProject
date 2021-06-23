package com.employees;

import java.lang.reflect.Array;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/test")


public class EmployeesController {

    @Autowired
    EmployeesRepository employeesRepository;

    @GetMapping("")
    public ResponseEntity<List<Employees>> getEmployeeByFirstNam(@RequestParam (required = false) String user){

            List<Employees> employeeData = new ArrayList<Employees>();
            Pageable pageable = PageRequest.of(0,20);
            employeesRepository.findByFirstName(user, pageable).forEach(employeeData::add);

            return new ResponseEntity<>(employeeData, HttpStatus.OK);
    }


    @GetMapping("/{$empNo}")
    public ResponseEntity<Employees> getEmployeeById(@PathVariable("$empNo") int empNo){
        Optional<Employees> employeeData = employeesRepository.findById(empNo);

        if(employeeData.isPresent()) return new ResponseEntity<>(employeeData.get(), HttpStatus.OK);
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



    @PostMapping("/create")
    public ResponseEntity<Employees>insertNewEmployee(@RequestBody Employees employee){

        Employees _employee = employeesRepository.save(new Employees(employee.getFirstName(), employee.getLastName()));

        return new ResponseEntity<>(_employee, HttpStatus.CREATED);

    }

    @PutMapping("/update/{$empNo}")
    public ResponseEntity<Employees> updateEmployee(@PathVariable("$empNo") Integer empNo, @RequestBody Employees employee){

        Optional<Employees> employeeData = employeesRepository.findById(empNo);

        if(employeeData.isPresent()){
            Employees _employee = employeeData.get();
            _employee.setFirstName(employee.getFirstName());
            _employee.setLastName(employee.getLastName());

            return new ResponseEntity<>(employeesRepository.save(_employee), HttpStatus.OK);
        }
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @DeleteMapping("/delete/{$empNo}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable("$empNo") int empNo){

        employeesRepository.deleteById(empNo);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @DeleteMapping("/delete")
    public ResponseEntity<HttpStatus> deleteAllEmployees(){
        employeesRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
