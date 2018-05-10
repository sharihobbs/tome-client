import * as actions from '../actions';

const initialState = {
    readList: {
        id: 'readList',
        name: 'Reading List',
        books: {
          0: {
            id: 1111,
            thumbnail: 'https://books.google.com/books/content?id=99Uo01-ptl4C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70iEdSDG5MbRu4RjdgY7fUI2cqvcq1Lgck5A5QzHhrYkP4QUDo7PUSdnPGOD1AHCLngSTIdRdNEpicf5tfx23E_X7S6nW0UscR4Qt6dkrvl-KkkzQsenIdwY9vCPkbrMOyShJMk',
            title: 'Rilke\'s Book of Hours: Love Poems to God',
            author: 'Anita Barrows',
            isbn: 9781440628320,
            note: '',
          },
          1: {
            id: 2222,
            thumbnail: 'https://books.google.com/books/content?id=opamCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE722kdG3Y2z1m8xr2FO9IaVSNnjJW7vJ10heMrOBkRHP8-EXMAyCdVVA0GQzrithKX3doCpqkkysVOxnqbcRw08-p1W1tW1jy9Zxoey_RMTtoILff8Cakr5X60moeOLT932SDv0w',
            title: 'Spark Joy: An Illustrated Master Class on the Art of Organizing and Tidying Up',
            author: 'Marie Kondo',
            isbn: 9781607749738,
            note: '',
          },
          2: {
            id: 3333,
            thumbnail: 'https://books.google.com/books/content?id=1V5BBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71myvtNGspnhd37hFw1IfeShGU2jM3dyWpkE46UcsdE9H2cRyS72ZfhltczEw1x065iLfWMIjKrBXaV1Dx0Dvr2XYHABKk3YT3W6dw99R_L6Yb3XEC77fOKSYXyDFqLH2HDmxwL',
            title: 'Joe: The Coffee Book',
            author: 'Jonathan Rubinstein',
            isbn: 9780762785834,
            note: '',
          },
          3: {
            id: 4444,
            thumbnail: 'https://books.google.com/books/content?id=ujYYAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71TQhpYDuhM42TosLbK4yJC0dbGMA3Zj6GgxCs0rOi6oLsAjOxJIgE6aCKGdLDiZoJ3ehvwowAJuRm_CWZ3DYehbdyFxSB08WyArUubeIsBJRO1HqOQ0frAoTlDr_S6Cva7I_Z-',
            title: 'Mindful Parenting: Simple and Powerful Solutions for Raising Creative, Engaged, Happy Kids in Today\'s Hectic World',
            author: 'Kristen Race',
            isbn: 9781250020314,
            note: '',
          },
          4: {
            id: 5555,
            thumbnail: 'https://books.google.com/books/content?id=GXppCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71w00ltfwCzUdU6DCrW4Xg1op5I3C6C8e5FfMgclVTY77OgoNQKwJ_m2a9nhQBRFOTdzhoDjXmw7pjn0HXhL1fRkq-J2wYeYFeHL0a-iXBnXITkcqoPCVfpRdR1ttByqQM0ziPs',
            title: 'Fodor\'s Germany',
            author: 'Fodor\'s Travel Guides',
            isbn: 9781101880340,
            note: '',
          },
          5: {
            id: 6666,
            thumbnail: 'https://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71rsX5V84tAv9CAea9G40jVeu8enNyolJfpn487raB2grLMK7TEH0iS3_zfYz3AgDUt-QuCCGYlxj3x-lfGbKySMMQox3crpTYZsnB-nGqfTxhXIOBdDRVQNXeyDohbWZq1zLcY',
            title: 'JavaScript: The Good Parts: The Good Parts',
            author: 'Douglas Crockford',
            isbn: 9780596554873,
            note: '',
          },
        },
    searResults: {
        id: 'searResults',
        name: 'Search Results',
        books: {
          0: {
            id: 1111,
            thumbnail: 'https://books.google.com/books/content?id=ifw8KUHGkpAC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE738Ot2WR7T97knOMXSRVCNscs9TInKrncF8Sz4UbXO9PC5MmV9rAiPz8lbAMwC_822nQjv14Un2kGK_fI0iYofsDEJimHrKLYhAp0Cl28xsK29EeXNxZVjipHNkoQ7qPrNAnaV9',
            title: 'Rockabye: From Wild to Child',
            author: 'Rebecca Woolf',
            isbn: 9780786750504,
            note: 'Joy said I would love this - all about parenting. 1/18/17'
          },
          1: {
            id: 2222,
            thumbnail: 'https://books.google.com/books/content?id=FxapBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72R6vP1qq3QOzJbSDnoMJB6APggced67KqkyAq7-B4ZG2PkyI3jNCnJdG8c_87YeV0r_zfD-pjbuvTa7A6k8DjYoqtWRHEbpZPPywRoJ1Pk1NogHP7Nk9aGczabxYjYqyQ7KZqu',
            title: 'Vivian Maier: Street Photographer',
            author: 'John Maloof',
            isbn: 9781576876336,
            note: 'Saw a documentary about this. Possible gift for Tom.'
          },
          2: {
            id: 3333,
            thumbnail: 'https://books.google.com/books/content?id=Nbj9CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70M2P7ULCmeHodM79KCL-SAr_M4eia8WWbe6c6Hf-3NJeu-mOHXEU6cPzkV2MjefiNo7T9Pq1LTFzozSKK1tqwPlqcxPA8mwiqW7iH4dYRQCv9hpANkiwlXDtTkSnRlzjtHXguS',
            title: 'Till We Have Faces: A Myth Retold',
            author: 'C. S. Lewis',
            isbn: 9780062565426,
            note: 'Get for class next semester - need it by June 5th.'
          },
          3: {
            id: 4444,
            thumbnail: 'https://books.google.com/books/content?id=5lpoAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70UqIDDX7YCipsWMqD8XM_cxZapAqMcJiMxDxsGJ-_f91TMUU16xVhwxSjaUAjCAxunJWqDXxRhn2PVA8F-rVuA10JCO2SLnoOrkQ6NZ6Iup6GyFHKNBbwDGpwUZMoRXnfRhILH',
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            isbn: 9783736801363,
            note: 'Dad said I need to read this.'
          },
          4: {
            id: 5555,
            thumbnail: 'https://books.google.com/books/content?id=rhZbCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72BGRpu1p4BkIZfGCOoI0zlEhZRdk_iJlQgRAngWgkJF5AnqLb1a2X7pNzBN5KmimJe8Ad2D72trIC4CazEeHz89rJ8dexYPSLUAXjjlaZeeOVWSWMdvh61HpnQjwxcysNd13ov',
            title: 'Alton Brown: EveryDayCook',
            author: 'Alton Brown',
            isbn: 9781101885727,
            note: 'This might help me finally learn to cook. Try his cookie recipe for Daniel.'
          },
          5: {
            id: 6666,
            thumbnail: 'https://books.google.com/books/content?id=hzdIVCfNIo4C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73xoFK-Tb20_PUXSUscmkaJIL6CKRNGkQ5KU1ukp78SFm4cyka8lic_VMcmz9uBoelr62rNYIas0pLoJm6ZkFZ4h6pa38v2I2FVujxFXDJ7f7UHGuf_lriN-iAHi5b19wFTCnr2',
            title: 'Journey to Cubeville',
            author: 'Scott Adams',
            isbn: 9780836267457,
            note: 'Perfect gift for Charlotte. Her birthday is in May... ask Angela.'
          }
        }
    }
  }
};

export const reducer = (state=initialState, action) => {
  return state;
};
