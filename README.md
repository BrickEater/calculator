# calculator

08/02/2023:
Finally finished the calculator. It is functional but I haven't done much testing and I don't think I will. I can only see it breaking if I put too many digits inter any of the operands or the result is too large. It would force the div to flex and that would look dumb.
To Do:
Figure out if that is the end of the project.

07/02/2023:
I have been trying to make a switch statement work for how the calculator evaluates the equation. It needs to address what operator is being used and compile an equation. The problem is I define the operator variable with the innerHTML and I used some specific string code to show nicer operators on the calculator. The innerHTML doesn't carry over an actual operator now. To solve this I thought of changing the operator variable to an array and have index 0 the innerHTML and index 1 the actual operator. Then I could call what I need when I need it.
To Do:
Figure out how to have the operator event define the two index and then use index 1 in the switch statement.

04/01/2023:
Finished printing the values of all the equation to the screen. I needed to add variables globally with let and change them inside the if statements without using a declaration key word to ensure it was assigning these values globally.
To Do:
I need to have the equal button use a switch statement to take the operands and evaluate the results of the equations. For the cases I probably need to use what I put in the divs instead of the literal operators.

03/02/2023 - The calculator is taking values to the screen now but still needs to be finished. The variables that are being defined with querySelector doesn't acknowledge innerHTML so I need to change the logic by targeting the actual class and innerHTML in them. 

02/02/2023 - Finished laying out the tags for the screen, now I need to make the button listener add innerHTML and have it feed into the objects rtl (right to left).

01/02/2023 - Laying out the screen to show the inputs of the user. Currently, the divs are on the left side when they need to be on the right, I think it's because I haven't defined the display type. Make sure to add display: grid tomorrow.

31/01/2023 - Finished writing the logic to take values for each operand and the operator.

30/01/2023 - Attempted to evaluate the equations but I'm struggling. I think I'm missing something by leaning to heavily on the bot. I'll need to come back with pseudo code next time so I understand my goals and how I want to approach this problem. A big issue is it's very easy to make this calculator very complicated.

29/01/2023 - The calculator now listens to the button clicks and adds the innerHTML to a variable. I think I will have to have conditions and parse the equation variable so that it is interpreting the values correctly. I will also need to create logic for BEDMAS and add specifics for the equals and clear buttons.

28/01/2023 - The listener is now set up but I need to write functions for all the buttons. I don't want to write a bunch of functions that are all the same except that it returns something slightly different. There must be a way to have 1 function that covers all the buttons.

25/01/2023 - Finished the layout of the calculator. Now I need to have the screen align any text added to the right side, listen for button inputs, add the inputs together to create an equation, and finally output the answer. I think the screen could be a bit taller to accommodate more inputs.

24/01/2023 - Tried adding a screen and messed up how everything is positioned and sized. I'll need to fool around with this later but I think I'm on the right track. I'm tempted to use grid-template-area instead of what I'm doing but we will see how it goes.

18/01/2023 - First day of the last exercise of "Fundamentals". I'm excited to be finished this and move on to using APIs and doing the big stuff. I have some ideas on how I want to make this calculator and I don't think it will be that hard with chatGPT.