/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({
  _id,
  title,
  summary,
  cover,
  createdAt,
  author,
}) {
  return (
    <div className='post'>
      <div className='img'>
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/' + cover} alt='' />
        </Link>
      </div>
      <div className='text'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          <a href='#' className='author'>
            {author?.username || 'Unknown'}
          </a>
          <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}
