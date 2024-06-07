package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Subscription;
import com.example.demo.repository.SubscriptionRepository;



@Service
public class SubscriptionService {

	 @Autowired
	    private SubscriptionRepository subscriptionRepository;

	    public Subscription saveSubscription(Subscription subscription) {
	        return subscriptionRepository.save(subscription);
	    }

	    public List<Subscription> getAllSubscriptions() {
	        return subscriptionRepository.findAll();
	    }

	    public Subscription getSubscriptionById(Long id) {
	        return subscriptionRepository.findById(id).orElseThrow(() -> new RuntimeException("Subscription not found"));
	    }

	    public Subscription updateSubscription(Long id, Subscription subscriptionDetails) {
	        Subscription subscription = getSubscriptionById(id);
	        subscription.setCustomer(subscriptionDetails.getCustomer());
	        subscription.setPlan(subscriptionDetails.getPlan());
	        subscription.setStartDate(subscriptionDetails.getStartDate());
	        subscription.setEndDate(subscriptionDetails.getEndDate());
	        subscription.setStatus(subscriptionDetails.getStatus());
	        return subscriptionRepository.save(subscription);
	    }

	    public void deleteSubscription(Long id) {
	        subscriptionRepository.deleteById(id);
	    }
}