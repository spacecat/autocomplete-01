"use client";
import { Autocomplete } from "@/app/autocomplete";
import algoliasearch from "algoliasearch/lite";
import Image from "next/image";
import Link from "next/link";
import { InstantSearch } from "react-instantsearch";

const searchClient = algoliasearch(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY}`
);

export default function Home() {
  return (
    <main className="">
     
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href="/">To Home</Link>
      </div>
      <div>
        <InstantSearch
          indexName={process.env.NEXT_PUBLIC_ALGOLIA_CUPS_INDEX_NAME}
          searchClient={searchClient}
          routing={true}
        >
          <Autocomplete
            autoFocus
            searchClient={searchClient}
            placeholder="Low cervix, heavy flow, teen, etc."
            detachedMediaQuery="none"
            openOnFocus
          />
        </InstantSearch>
      </div>

      
    </main>
  );
}
