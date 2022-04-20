import Link from 'next/link';
import Image from 'next/image';

export default function RecipeCard({
  recipe
}) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className='card'>
      <div className='featured'>
        <Image
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          src={`https:${thumbnail.fields.file.url}`}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Take approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link href={`/recipes/${slug}`}><a>Cook This</a></Link>
        </div>
      </div>
      <style jsx>{`
        .card {
          max-width: fit-content;
          transform: rotateZ(-1deg);
          transition: transform 200ms ease-in-out, scale 200ms ease-in-out;
        }
        .card:hover {
          transform: rotateZ(0deg) scale(1.1);
          transition: transform 200ms ease-in-out;
        }
        .card:hover .content {
          transform: translate(10px, 0px);
          transition: transform 200ms ease-in-out;
        }
        .card:hover .actions {
          transform: translate(-10px, -10px);
          transition: transform 200ms ease-in-out;
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
          transition: all 200ms ease-in-out;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
          transition: transform 200ms ease-in-out;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
          transition: all 400ms ease-in-out;
        }

        .actions a:hover {
          background:  #000000;
          padding: 16px 24px;
          text-decoration: none;
          transition: all 200ms ease-in-out;
        }
      `}</style>
    </div>
  );
}
