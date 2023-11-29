import React, { useEffect, useState } from 'react'
import useStyles from './styles.js'
import { Card,CardActions,CardContent,CardMedia,Button,Typography,ButtonBase } from '@mui/material';
// import { ThumbUpAltIcon,DeleteIcon,MoreHorizIcon } from '@mui/icons/'
import {FaThumbsUp,FaRegThumbsUp} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi';
import moment from 'moment'
import { useDispatch } from 'react-redux';

import { deletePost,likePost } from '../../../actions/posts.js';
import { useNavigate } from 'react-router-dom';
  
const Post = ({post,setCurrentId}) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const classes =useStyles();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post?.likes?.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  // const Likes = () => {
  //   if (likes.length > 0) {
  //     return likes.find((like) => like === userId)
  //       ? (
  //         <><FaThumbsUp className={classes.icons} />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
  //       ) : (
  //         <><FaRegThumbsUp className={classes.icons} />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
  //       );
  //   }

  //   return <><FaRegThumbsUp fontSize="small" />&nbsp;Like</>;
  // };
  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><FaThumbsUp className={classes.icons} />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><FaRegThumbsUp className={classes.icons} />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><FaRegThumbsUp className={classes.icons}/>&nbsp;Like</>;
  };

  const openPost=()=>{
    navigate(`/posts/${post._id}`)
  }

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
      component="div"
       className={classes.cardAction}
       onClick={openPost}
      >
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.name?post.name:post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
      {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) &&(
        <Button style={{color:'white'}} size='small' onClick={()=>{setCurrentId(post._id)}}>
          <FiMoreHorizontal className={classes.hori}/>
        </Button>)}
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=>`#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent >
        <Typography variant='body2' color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' disabled={!user?.result} alignItems justifyItems onClick={handleLike}>
          <Likes/>
        </Button> 
        {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
          <Button size='small' color='primary' onClick={()=>{dispatch(deletePost(post._id))}}>
          <AiFillDelete className={classes.icons}/>
            &nbsp;Delete
          </Button> 
        )}
        
        </CardActions>
    </Card>
  )
}

export default Post
