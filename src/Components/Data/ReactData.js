export const reactQuestions = [
  {
    question: '1.What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: '2.What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript recommended for use with React. It looks similar to XML/HTML.',
  },
  {
    question: '3.	React version updates?',
    answer: (
      <>
        <strong>18:-</strong>Profiler, lazy loading, suspense<br />
        <strong>17:-</strong>SSR improved<br />
        <strong>16:-</strong>Error boundary, Error handling, Fragments, Hooks, Context API, SSR, React.suspense.<br />
        <strong>15:-</strong>JSX, Virtual DOM, Stateless Component (Functional comp), Keys.
      </>
    ),
  },
  {
    question: '4.	State and props in react?',
    answer: (
      <>
        <strong>State: </strong><br /><br />
        <strong>Purpose</strong>State is used to manage and represent data that can change over time within a component. It's typically used for information that is specific to and controlled by that component.<br />
        <strong>Mutable: </strong>State is mutable, we can modify it using the setState method provided by React.<br />
        <strong>Initialization:</strong>We can initialize state within a component's constructor or using the useState hook in functional components.<br />
        1. State is used to manage and store internal data within a component.It is mutable and can be changed within the component.<br />
        2. State is managed within the component itself and can be initialized in the constructor.<br />
        3. To update the state and trigger a re-render, we use the setState () method, as directly modifying the state will not re-render the component.<br />
        4. State is private to the component and cannot be accessed or modified from outside the component.<br /><br />
        <strong>Props: </strong><br /><br />
        <strong>Purpose:</strong>Props are used to pass data from a parent component to a child component. They allow to make components reusable and maintain a unidirectional data flow.<br />
        <strong>Immutable: </strong>Props are immutable, they cannot be modified by the child component that receives them. They are read-only.In summary, state is used to manage and represent component-specific data that can change over time, while props are used to pass data from parent to child components.<br /><br />
        Functional components can also manage state using hooks like useState, making state management more accessible and concise in React.<br />
        1. Props are used to pass data from a parent component to a child component.<br />
        2. Props are read-only and cannot be modified within the child component; they are immutable.<br />
        3. Values for props are determined by the parent component and can be changed by the parent, causing the child component to re-render with the updated props.<br />
        4. Props are used to make components reusable between different components.
      </>
    ),
  },
  {
    question: '5.	State and variable difference?',
    answer: (
      <>
        <strong>State:</strong><br/>
        Component- Each component can have its own state, and changes to this state trigger re-renders of that component.<br/>
        Managed by React: State is typically initialized and managed by React itself. We use the setState function (in class components) or the useState hook (in functional components) to update the state. React ensures that the component re-renders when state changes.<br/>
        Asynchronous: State updates are always asynchronous to optimize performance. We cannot rely on the immediate value of state after calling setState or useState.<br/><br/>
        <strong>Regular Variables (Class Properties or Functional Variables):</strong><br/>
        Component-wide: Regular variables are not specific to React and can exist outside the React component's rendering mechanism. They are not managed by React, and their changes do not automatically trigger re-renders.<br/>
        Local to Functions: Regular variables in functional components are typically declared within the function's scope, and their values persist across renders. They do not trigger re-renders unless they are used in the component's JSX, causing the component to re-render when the component function is called.<br/>
        Synchronous: Updates to regular variables are synchronous, immediately access their updated values.
      </>
    ),
  },
  {
    question: '6.	Control and uncontrollable components in react?',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  {
    question: '',
    answer: '',
  },
  // Add more questions and answers as needed
];