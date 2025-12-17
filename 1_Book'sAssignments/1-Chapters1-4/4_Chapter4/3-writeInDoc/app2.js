let ruleHeading = "Rules for naming JS variables";
    let rule1 = "Variable names can only contain letters, numbers, $, and _.";
    let example1 = "For example: $my_1stVariable";

    let rule2 = "Variables must begin with a letter, $, or _.";
    let example2 = "For example: $name, _name or name";

    let rule3 = "Variable names are case sensitive.";
    let rule4 = "Variable names should not be JS keywords.";

    
    document.write(`
        <h2>${ruleHeading}</h2>
        ${rule1}<br>
        ${example1}<br><br>

        ${rule2}<br>
        ${example2}<br><br>

        ${rule3}<br><br>
        ${rule4}<br><br>
    `);