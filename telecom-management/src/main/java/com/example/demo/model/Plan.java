package com.example.demo.model;


import jakarta.persistence.*;

@Entity
public class Plan {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private int dataLimit;

    @Column(nullable = false)
    private int callMinutes;

    @Column(nullable = false)
    private int smsLimit;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getDataLimit() {
		return dataLimit;
	}

	public void setDataLimit(Integer dataLimit) {
		this.dataLimit = dataLimit;
	}

	public Integer getCallMinutes() {
		return callMinutes;
	}

	public void setCallMinutes(Integer callMinutes) {
		this.callMinutes = callMinutes;
	}

	public Integer getSmsLimit() {
		return smsLimit;
	}

	public void setSmsLimit(Integer smsLimit) {
		this.smsLimit = smsLimit;
	}

	@Override
	public String toString() {
		return "Plan [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price
				+ ", dataLimit=" + dataLimit + ", callMinutes=" + callMinutes + ", smsLimit=" + smsLimit + "]";
	}
    public Plan() {
    	
    }

	public Plan(Long id, String name, String description, Double price, Integer dataLimit, Integer callMinutes,
			Integer smsLimit) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.dataLimit = dataLimit;
		this.callMinutes = callMinutes;
		this.smsLimit = smsLimit;
	}
    

}
