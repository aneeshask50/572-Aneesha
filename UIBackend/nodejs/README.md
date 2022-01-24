# Training details
Basic Node.js training at Collabera from Jan 10 - 14 2022

## Setting environment variables in Windows
```
setx VARIABLE_NAME "variable value"
```

## Find process occupying a port, and kill the process (in Windows)
In Powershell type
```
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess
```
Then find the process ID and use it in the next step to kill the process occupying the port
```
taskkill /F /PID 3000
```

## Exercise
- Jan 12
    - EXERCISE 1
        - Add new users to the DB (create a JSON with more users and add them)
        - Implement sorting for /users
        - Implement pagination (5 users per page)
        - Filter by role (role=admin / role=customers)
    - EXERCISE 2: Question 4 (lab guide)
    - EXERCISE 3: Question 20 (lab guide)