const NewOrderPage = () => {
  
  const createOrder = async(order) => {
    const res = await fetch('/orders/new', order, post)
  }
  return (
      <div>
        <h1>New Order Page</h1>
        <form onSubmit={createOrder} />
      </div>
    );
  };
  
  export default NewOrderPage;