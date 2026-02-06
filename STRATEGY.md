### 2. STRATEGY.md (Onde você brilha como QA)

```markdown
# Test Strategy & Technical Reasoning

## 🎯 Scope
The primary focus of this suite is the **End-to-End (E2E) Purchase Flow** on the SauceDemo website. This flow represents the "Happy Path" and the most critical revenue-generating feature for the business.

## 🏗 Architectural Decisions

### 1. Page Object Model (POM)
I implemented the **Page Object Model** to decouple the test scripts from the UI selectors. 
- **Benefit:** If the developers change a button's ID, I only need to update it in one file (`pages/`), preventing the "brittle test" syndrome.

### 2. Resilient Selectors
Instead of using fragile CSS classes or XPaths, I prioritized **data-test attributes** (e.g., `[data-test="username"]`). 
- **Benefit:** These attributes are less likely to change during UI redesigns, ensuring higher test stability.

### 3. Custom Commands
Repetitive actions, such as the login process, were abstracted into **Cypress Custom Commands**.
- **Benefit:** This keeps the test scripts DRY (Don't Repeat Yourself) and focuses each test strictly on its specific objective.

## 🧪 Test Scenarios Covered
1. **Successful Login:** Validating access with standard credentials.
2. **Negative Authentication:** Ensuring the system handles "locked-out" users and displays correct error messages.
3. **E2E Purchase Flow:** A complete journey from "Product Selection" to "Order Confirmation."

## 🚀 Risk Mitigation & Best Practices
- **Assertions:** Implemented explicit assertions (Should/And) to validate not just the UI, but the application state (URLs and success messages).

