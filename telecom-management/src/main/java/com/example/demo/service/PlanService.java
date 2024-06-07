package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Plan;
import com.example.demo.repository.PlanRepository;



@Service
public class PlanService {

	@Autowired
    private PlanRepository planRepository;

    public Plan savePlan(Plan plan) {
        return planRepository.save(plan);
    }

    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    public Plan getPlanById(Long id) {
        return planRepository.findById(id).orElseThrow(() -> new RuntimeException("Plan not found"));
    }

    public Plan updatePlan(Long id, Plan planDetails) {
        Plan plan = getPlanById(id);
        plan.setName(planDetails.getName());
        plan.setDescription(planDetails.getDescription());
        plan.setPrice(planDetails.getPrice());
        plan.setDataLimit(planDetails.getDataLimit());
        plan.setCallMinutes(planDetails.getCallMinutes());
        plan.setSmsLimit(planDetails.getSmsLimit());
        return planRepository.save(plan);
    }

    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    }
}
