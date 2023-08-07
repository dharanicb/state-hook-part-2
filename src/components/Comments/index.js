import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setComment] = useState('')
  //   const [comments, setTotalComments] = useState({name: '', commentText: ''})
  const [commentItemList, setCommentList] = useState([])

  const onChangeName = event => {
    setName(event.target.value)
  }
  const onChangeComment = event => {
    setComment(event.target.value)
  }
  const onSubmitComment = event => {
    event.preventDefault()
    // setTotalComments({name, commentText})
    setName('')
    setComment('')
    const newComments = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(prevState => [...prevState, newComments])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onChangeName}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeComment}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentItemList.map(eachItem => (
          <CommentItem commentDetails={eachItem} key={eachItem.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
