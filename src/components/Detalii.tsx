import { detailsData } from '../data/data';
import GridItem from './GridItem';

function Detalii() {
  return (
    <div id='detalii' className='bg-slate-50 py-20 pt-52 -mt-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
          De ce să alegi mierea noastră?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {detailsData.map((item) => (
            <GridItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detalii;
