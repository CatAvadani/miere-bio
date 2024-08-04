interface GridItemProps {
  title: string;
  description: string;
  image: string;
}

function GridItem({ title, description, image }: GridItemProps) {
  return (
    <div className='text-center p-6'>
      <img
        src={image}
        alt='Calitate'
        className='w-32 h-32 mx-auto mb-4  border-4 border-white rounded-full shadow-lg'
      />
      <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>
      <p className='mt-4 text-gray-600 text-sm sm:text-lg'>{description}</p>
    </div>
  );
}

export default GridItem;
