"use client"
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
import styles from "@/styles/post.module.css";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
// import { makeStyles } from '@mui/styles';

const CommentPost = () => {
  const { id } = useParams();
  const router = useRouter();


  // const { data: session, status } = useSession();
  // let userName = session?.user.name.toString();


  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState({
    user: "",
    title: "",
    body: "",
  });

  const userName = 'cristian'


  const handleOnChange = (e) => {
    setComment({
      ...comment,
      user: userName,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );
      console.log(response.ok)
      response.ok 
      ? setTimeout(() => (router.refresh()), 1000) 
      : console.error('error: --> ', response.statusText)
    } catch (error) {
      console.error('solicitud: ', error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ margin:'25px 0'}}>
      {/* TEST START */}
        <Card >
        <CardContent>
          <Typography variant="h6" >
            Comenta!
          </Typography>
          <TextField 
          rows={1}
          fullWidth
          variant="outlined"
          label="Titulo"
          name='title'
          onChange={(e) => handleOnChange(e)}
          />
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            label="Tu comentario acá"
            name='body'
            onChange={(e) => handleOnChange(e)}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </CardContent>
      </Card>

    {/* TEST FINAL */}





      {/* {session && session.user && status === "authenticated" ? (
        // <form
        //   onSubmit={handleSubmit}
        //   className={styles.form}
        //   style={{
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //   }}
        // >
        //   <label></label>
        //   <input type="text" name="user" value={comment.user} disabled />
        //   <input
        //     type="text"
        //     value={comment.title}
        //     name="title"
        //     onChange={(e) => handleOnChange(e)}
        //     required
        //   />
        //   <input
        //     type="text"
        //     value={comment.body}
        //     name="body"
        //     onChange={(e) => handleOnChange(e)}
        //     required
        //   />
        //   <button type="submit">enviar</button>
        // </form>

        <Card className=''>
        <CardContent>
          <Typography variant="h6" className=''>
            Leave a Comment
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            label="Your Comment"
            onChange={(e) => handleOnChange(e)}
            className=''
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className=''
          >
            Submit
          </Button>
        </CardContent>
      </Card>

      ) : undefined} */}
      
    </div>
  );
};

export default CommentPost;
