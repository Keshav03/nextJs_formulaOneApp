
import Link from 'next/link';
import { useState } from 'react';

export default function PostHomepage() {

    const [post, setPost] = useState(0)

    return (
      <div>


        <Link href="./">Back to Main Homepage</Link>
        <hr></hr>

        <Link href="./first-post">Navigate to post</Link>


        
      </div> 
    );
  }