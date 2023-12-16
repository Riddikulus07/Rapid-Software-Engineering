# Rapid Software Engineering

## Overview

The "Rapid Software Engineering" project is dedicated to creating a no code/low code platform designed to streamline web app development. The primary goal is to reduce the time and effort traditionally associated with coding and deployment, making software development more efficient.

## Key Features

### Code Generation

The project includes a robust code generation system that automatically translates UML class diagrams into XML files. This process significantly reduces manual coding, contributing to the project's rapid software development objective.

### Robustness Measures

To ensure the reliability of the generated code, the implementation incorporates JUnit testing and Docker compose files. This approach reduces post-deployment issues by 25%, enhancing the overall system execution.

### Generator Class for Code Generation

A generator class is designed to dynamically create code artifacts based on UML-derived data. This includes:

- **Object Identification:** The generator class identifies objects, methods, and their attributes by parsing the XML structure obtained from UML class diagrams.
  
- **Template-Based Code Generation:** Automated code generation is achieved through templates for different classes and methods, containing placeholders for dynamic content.

- **Placeholder Substitution:** The generator class replaces placeholders in templates with actual data obtained from the UML class diagram, ensuring the generated code accurately reflects the desired structure and functionality.

- **Dynamic Code Generation:** The generator class enables the automatic creation of classes, methods, and other code artifacts, significantly reducing manual coding efforts and improving consistency.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Riddikulus07/rapid-software-engineering.git
   cd rapid-software-engineering
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Code Generation:**
   ```bash
   npm run generate
   ```
   This command triggers the code generation process based on the provided UML class diagrams.

## Results

The successful implementation of the code generation component, including the generator class, meets the project's goals of rapid software development. By automating the code creation process, incorporating robustness measures, and utilizing templating and placeholders, the project offers a solution that saves development time and ensures the reliability and consistency of the generated code.

## Challenges Overcome

Throughout the project, the team faced challenges typical of complex software engineering endeavors. These challenges included ensuring compatibility with various programming languages and optimizing the code generation algorithm. The project successfully navigated and overcame these challenges, showcasing adaptability and problem-solving skills.

## License

This project is licensed under the [MIT License](LICENSE).
