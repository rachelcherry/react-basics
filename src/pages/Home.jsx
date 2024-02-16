import { useState } from 'react';
export function Home() {
  function MyButton({ onClick }) {
    return (
      <button onCLick={handleClick}>Add</button>
    );
  }
  function handleClick() {
    alert('Please enter a valid 10-digits phone number');
  }
  return (
    <div>
      <div>
        <h1> Welcome to Spark! BookPals</h1>
        <p>Spark! BookPals is a revolutionary platform for Boston University's community. BU students and affiliates can connect with each other to share book recommendations, start in-depth discussions, and more! Our unique features allow users to filter books based on genres and complexity, among other things. Stay up-to-date through SMS, Signal, and whatsapp notifications wherever a book you may be interested in is disussed</p>
      </div>
      <div>
        <h2>Sign up</h2>
        <p>Sign up for notifications</p>
        <MyButton />
</div>
</div>
    )
    }
