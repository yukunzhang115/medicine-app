# Discussion Response
*(put any discussion here)*

Hello, my name is Yukun Zhang. 

I basically finished the take meds part.

Here is what I have done:

1. dynamic rendering
    (1) "Morning" or "Evening" title is based on the current time.
    (2) Number of routine meds are based on calculating the length of total meds on "Morning" or "Evening".
    (3) The circles are based on calculating the number of the taken meds and untaken meds on "Morning" or "Evening".
    (5) List of untaken meds is rendered as a list for users to see.
    (4) Due time, name, dosage, and dosage type are also dynamic.

2. Take button function
I implemented the take button function. After users click the take button, that med will not be shown in the take med section and the filled circle will increase by 1 and the unfilled circle will decrease by 1.

3. Made the UI more beautiful
I used the rest of my time to modify the UI.

Questions:

1. What instructions will we need to properly interact with your code?

    You can test my take sections by:
    clicking the take button function.

2. Were there any decision points you came across? Did you need to make any assumptions?
    (1) When I planned to dynamically render the title of "Morning Medication", I needed to decide how many period users want to divide. For example, I  can divide into "Morning" and "Evening" or I can divide into "Morning", "Afternoon", "Evening".
    (2) I needed to decide what list to render in take med section. For example, I can show untaken meds or I can show all the meds.

3. Were there any questions you would have asked if this was a real-world scenario?

    If users do not finish taking all the meds this morning, do I need to still render the untaken meds in the evening? 

4. How did you prioritize your time? If given a few more hours to improve this, what you would work on next and why?

    I started from the redux section, and then I implement the dynamic rendering part. After that, I implement the take button function. And finally, I can use the rest of the time to modify UI. If I have more time, I will continue modifing my UI to add pictures, adjust the font style and adjust the position of the elements.

5. If you have any feedback or reflections, please share them with us. For example, if you could redo these exercises, what would you have done differently?

    I think this challenge is really great for people who want to be a react developer. It is a good example for people to learn more about redux, react-redux, redux-saga. And a good example for people to improve skills to beautify the UI. 
