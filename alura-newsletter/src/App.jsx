import React, { useState } from "react";
import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";
import Form from "./components/Form/Form";

const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  return (
    <div>
      <Header user={user}/>
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser} />}
    </div>
  );
};

export default App;
