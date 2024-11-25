1. Context Api
   he Context API is a feature that provides a way to share data (or state) globally across a component tree, without having to pass props manually at every level. This is especially useful when dealing with deeply nested components where "prop drilling" (passing props down multiple levels) becomes cumbersome.

2. What is "Context" in the Context API?
   The context in the Context API refers to a centralized object or value that holds the data you want to share across multiple components. It acts like a "store" that can be accessed by any component in the tree.

For example, context can hold:

Theming information (light/dark mode)
User authentication details
Application state (like language settings, user preferences, etc.)

part 1. make a global file of extension .js because we will use pure js in this file <--here file name is UserContext.js-->

every context is a provider that provide a variable so we wrap the component in context so we can access the variable or context in any component

example:    import React from 'react'
            const UserContext=React.createContext()
            export default UserContext

here UserContext is the wrapper
<UserContext>
<login/>
<Card>
    <data/>
</Card>
</UserContext>
