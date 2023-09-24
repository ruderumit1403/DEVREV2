import React from 'react';
import "./products.css";


export default function navbar(){
   return(
   

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Product Collection
      </h2>

      <p className="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>

    <div className="mt-8 block lg:hidden">
      <button
        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span className="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4 rtl:rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>

    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
      <div className="hidden space-y-4 lg:block">
        <div>
          <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
            Sort By
          </label>

          <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>

        <div>
          <p className="block text-xs font-medium text-gray-700">Filters</p>

          <div className="mt-1 space-y-2">
            <details
              className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span className="text-sm font-medium"> Availability </span>

                <span className="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> 0 Selected </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        In Stock (5+)
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPreOrder"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Pre Order (3+)
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterOutOfStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Out of Stock (10+)
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>

            <details
              className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span className="text-sm font-medium"> Price </span>

                <span className="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700">
                    The highest price is $600
                  </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label
                      htmlFor="FilterPriceFrom"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </details>

            <details
              className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span className="text-sm font-medium"> Colors </span>

                <span className="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> 0 Selected </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      htmlFor="FilterRed"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterRed"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Red
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterBlue"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterBlue"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Blue
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterGreen"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterGreen"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Green
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterOrange"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOrange"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Orange
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPurple"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPurple"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Purple
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterTeal"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterTeal"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Teal
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Book 1 */}
          <li>
            <a href="https://rb.gy/6snip" className="group block overflow-hidden">
              <img
                src="https://ia600303.us.archive.org/BookReader/BookReaderImages.php?zip=/13/items/HindiBook-shriRamChritManas-1.pdf/HindiBook-shriRamChritManas-1_jp2.zip&file=HindiBook-shriRamChritManas-1_jp2/HindiBook-shriRamChritManas-1_0000.jp2&id=HindiBook-shriRamChritManas-1.pdf&scale=4&rotate=0"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                THE RAMAYAN
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button><a href="https://mimoza.marmara.edu.tr/~msakalli/cse706_12/SkienaTheAlgorithmDesignManual.pdf">Read</a></button> </span>
                </p>
              </div>
            </a>
          </li>
{/* Book 2 */}
          <li>
            <a href="http://rb.gy/jrwzy" className="group block overflow-hidden">
              <img
                src="https://www.holybooks.com/wp-content/uploads/The-Mahabharata-PDF.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Mahabharata
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>
          {/* Book 3 */}
          <li>
            <a href="http://rb.gy/ko6ry" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/41K75k3WFVL._SY445_SX342_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  The Upanishads
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>
          {/* Book 4 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631634958i/99944.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  The Bhagavad Gita
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 5 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>
          {/* Book 6 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 7 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 8 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 9 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 10 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 11 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 12 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 13 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 14 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 15 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 16 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 17 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 18 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 19 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 20 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 21 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 22 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 23 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 24 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 25 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 26 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 27 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 28 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 29 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>

          {/* Book 30 */}
          <li>
            <a href="https://www.dlshq.org/download2/bgita.pdf" className="group block overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/61NsVD4xLbL._SY466_.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  1857 Ka Savtantrta Samar
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> <button>Read</button> </span>
                </p>
              </div>
            </a>
          </li>


          
        </ul>
      </div>
    </div>
  </div>
</section>
   );
}