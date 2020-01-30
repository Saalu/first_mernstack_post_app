const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');

router.get('/', (req, res) => {
	BlogPost.find({})
		.then((data) => {
			console.log('Data:', data);
			res.json(data);
		})
		.catch((err) => {
			console.log('Error:', dataerror);
		});
});

// Post
router.post('/save', (req, res) => {
	console.log('Body:', req.body);
	const data = req.body;

	const newBlogPost=new BlogPost(data)

	// save
	newBlogPost.save((err)=>{
		if(err){
			res.status(500).json({msg:'Sorry, internal server errors'})
		}else{

			// BlogPost
			res.json({
				msg: 'Your data has been saved!!!'
			});
		}
	})

});

router.get('/name', (req, res) => {
	const data = {
		username: 'maryam',
		age: 3
	};
	res.json(data);
});

module.exports = router;


























// const express = require('express');
// const Item = require('../../models/Item');
// const router = express.Router();

// // Get Item
// router.get('/', (req, res) => {
// 	Item.find().sort({ date: -1 }).then((item) => res.json(item));
// });

// // Post Item
// router.post('/', (req, res) => {
// 	const newItem = new Item({
// 		name: req.body.name
// 	});
// 	newItem.save().then((item) => {
// 		console.log(`Feedback: ${item}`), res.json(item);
// 	});
// });

// // Delete Item
// router.delete('/:id', (req, res) => {
// 	Item.findById(req.params.id)
// 		.then((item) =>
// 			item.remove().then(() => {
// 				console.log('Item Deleted'), res.json({ success: true });
// 			})
// 		)
// 		.catch((err) => {
// 			console.log('Failed Deleting Item'), res.status(404).json({ success: false });
// 		});
// });
// module.exports = router;
