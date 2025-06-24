# javascriptLearning

1. data type and variable

- undefined = not set to anything
- null = set to be sth and that sth is "nothing"
- boolean = true or false
- string = word or text
- symbol = primitive value that is unique
- number = lek
- object = store key-value pair

and we set data into variable

- case sensitive

# Step 1: Remove the submodule reference

git rm --cached react-app

# Step 2: Delete the .git directory inside react-app

rm -rf react-app/.git

# Step 3: Add it as a regular folder

git add react-app

# Step 4: Commit

git commit -m "Add react-app project as regular directory"

# Step 5: Push

git push

prop vs state

- prop:
  input passed to a component
  similar to function args
  immutable (aka const)

- state:
  data managed by a component
  similar to local variable
  mutable

- passing children
