# 🛒 E2E Automation Project: SauceDemo (Cypress + POM)

This project showcases a professional-grade automated testing suite for an E-commerce platform. It was designed to demonstrate best practices in **Software Quality Assurance**, including maintainability, scalability, and clean code.

## 🚀 Overview
The goal is to ensure the stability of the most critical user journey: the **Purchase Flow**. By using modern automation patterns, the suite provides fast feedback on the application's health.

## 🛠 Tech Stack
- **Framework:** [Cypress](https://www.cypress.io/)
- **Design Pattern:** Page Object Model (POM)
- **Language:** JavaScript
- **Reporting:** Mochawesome Reports
- **CI/CD:** GitHub Actions (Integration Ready)

## 📁 Project Structure
```text
├── cypress/
│   ├── e2e/               # Test scripts (clean and readable)
│   ├── support/
│   │   ├── pages/         # Page Objects (Selectors & Methods)
│   │   └── commands.js    # Custom global commands
├── STRATEGY.md            # Technical reasoning and planning
└── cypress.config.js      # Framework configuration