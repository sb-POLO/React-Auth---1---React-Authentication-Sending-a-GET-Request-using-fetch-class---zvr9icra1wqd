# React auth
In this question we will be implementing the basic auth cycle for react apps.

We will have 3 routes and their corresponding page.
<ul>
    <li>'/signin' => <code>/src/pages/Signin</code> component </li>
    <li>'/signup' => <code>/src/pages/Signup</code> component </li>
    <li>'/home' => <code>/src/pages/Home</code> component </li>
</ul>
Inside the Signin and Signup Page, we will have only two fields, 
one for email and the another for password. Make sure you use proper
semantic types for these fields and wrap them inside the <code>form</code> tag.
And also button of type submit with text 'Signin' and 'Signup' inside it.

Also make sure the regular HTML validation is being used i.e the browser checks
weather email is valid or not and password is present(required atrribute).
It won't submit until we fill it with valid data.

Now what happens after submitting it with valid data, in an actual 
app we will make a post request to backend like this.
<br>
<code>
    fetch('/auth/signup',{ <br>
        &nbsp;method:'POST' <br>
        &nbsp;body:JSON.stringify({email,password})<br>
    })
</code>
Then either using async/await or .then syntax handle the result.
Since we have no backend for this frontend we have made a helper function for the
above fetch code like we would do if we had a backend.

In <code>src/api/auth.js</code> two functions are being exported
one for signin and another for signup, they take an object with key 'email' and 'password'.
Pass the email and password from signin and signup pages to the respective functions.
And if successfull resolve i.e execute successfully or result in an error.

If signin fails due to wrong email/password show the error in class 'error-txt' with text
"Wrong email or password" inside it.

Also since we are storing the user info in localStorage, initially you 
will need to create a user than only signin will work with that credentials.


