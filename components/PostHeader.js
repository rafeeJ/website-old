import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'
import Categories from './Categories'

export default function PostHeader({
  title,
  displayImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <div>{title}</div>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>

      {
        displayImage ?
          <div className="mb-8 md:mb-16 sm:mx-0">
            <CoverImage title={title} coverImage={displayImage} />
          </div>
          :
          <></>
      }

      <div className="">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}