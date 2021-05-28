## Book Room API

### Book Author CRUD operations:

```
//To get author list

const uri = `https://shrouded-crag-01009.herokuapp.com/bookAuthor`;
axios
	.get(uri)
	.then(function (response) {
		// handle success
	})
	.catch(function (error) {
		// handle error
	});
```

```
// To get single author

const uri = `https://shrouded-crag-01009.herokuapp.com/bookAuthor/${authorId}`;
axios
	.get(uri)
	.then(function (response) {
		// handle success
	})
	.catch(function (error) {
		// handle error
	});
```

```
// To add single author

const uri = `https://shrouded-crag-01009.herokuapp.com/bookAuthor/`;
axios
	.post(uri, postData)
	.then(function (response) {
		// handle success
	})
	.catch(function (error) {
		// handle error
	});

```

```
To edit single author

const uri = `https://shrouded-crag-01009.herokuapp.com/bookAuthor/${authorId}`;
	axios
	.put(uri, postData)
	.then(function (response) {
		// handle success
	})
	.catch(function (error) {
		// handle error
	});
```

### Book CRUD operations:

```
//To get Book list (Book list will be generate with author information)

const uri = `https://shrouded-crag-01009.herokuapp.com/book`;
axios
	.get(uri)
	.then(function (response) {
		// handle success
	})
	.catch(function (error) {
		// handle error
	});
```

```
// To get single Book

const uri = `https://shrouded-crag-01009.herokuapp.com/book/${bookId}`;
axios
	.get(uri)
	.then(function (response) {
		// handle success
	})
	.catch(function (error) {
		// handle error
	});
```

```
// To add single Book

// category = ["Arts & Music", "BioGraphies", "Computers & Tech", "Education", "Entertainment", "Health & Fitness", "History", "Kids",  "Motivational Books", "Religion", "Romance",],

const uri = `https://shrouded-crag-01009.herokuapp.com/book/`;
axios
	.post(uri, postData)
	.then(function (response) {
		// handle success
	})
	.catch(function (error) {
		// handle error
	});
```

```
To edit single Book

const uri = `https://shrouded-crag-01009.herokuapp.com/book/${bookId}`;
	axios
	.put(uri, postData)
	.then(function (response) {
		// handle success
	})
	.catch(function (error) {
		// handle error
	});
```
