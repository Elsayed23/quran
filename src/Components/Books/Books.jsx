import React from 'react';
import axios from 'axios';
import SEO from '../other/SEO';
import SecTitle from '../other/SecTitle';
import Book from './Book';
import Loading from '../other/Loading';
import ProgressBar from '../other/ProgressBar';
import bgImage from '../../assets/images/Islamic-Library.jpg'

const Books = () => {

    const [books, setBooks] = React.useState(null)
    const [loading, setLoading] = React.useState(true);

    console.log(books);

    async function getBooks() {
        const { data } = await axios.get('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/books/ar/ar/1/25/json')
        setBooks(data.data)
        setLoading(false)
    }
    React.useEffect(() => {
        getBooks()
    }, [])

    const book = books?.map((book, idx) => {
        return (
            <Book key={idx} {...book} />
        )
    })

    return (
        loading
            ?
            <Loading />
            :
            <>
                <SEO title='كتب إسلامية' desc='Explore a rich collection of religious books encompassing Islamic teachings and wisdom. Our Religious Books page is a treasure trove of knowledge, covering various aspects of Islam. Immerse yourself in literature that nurtures your spiritual growth.' />
                <ProgressBar />
                <div className="container mx-auto py-8 px-4 md:px-16 before:fixed before:w-full before:h-full before:bg-[#000000e6] before:left-0 before:top-0 before:-z-[9]">
                    <img src={bgImage} alt='bg' className='fixed top-0 left-0 w-full h-full -z-10' />
                    <SecTitle title='كُتب إسلامية' />
                    <div className="grid grid-cols-1 gap-x-4 gap-y-6">
                        {book}
                    </div>
                </div>

            </>
    )
}

export default Books;