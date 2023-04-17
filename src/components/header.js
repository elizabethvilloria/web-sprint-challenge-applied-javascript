const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const the_date = document.createElement('span');
  const the_title = document.createElement('h1');
  const the_temp = document.createElement('span');

  header.classList.add('header');
  the_date.classList.add('date');
  the_temp.classList.add('temp');

  the_date.textContent = `${date}`;
  the_title.textContent = `${title}`;
  the_temp.textContent = `${temp}`;

  header.appendChild(the_date);
  header.appendChild(the_title);
  header.appendChild(the_temp);

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


  return header;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header("Bloomtech Times", "May 5, 2005", "35"))

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
