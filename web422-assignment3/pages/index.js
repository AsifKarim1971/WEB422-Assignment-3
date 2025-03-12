/*********************************************************************************
 *  WEB422 – Assignment 3
 *
 *  I declare that this assignment is my own work in accordance with Seneca's
 *  Academic Integrity Policy:
 *
 *  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 *  Name: Md Asif Karim Student ID: 116316233 Date: 12 March 2025
 *
 ********************************************************************************/

import { useState, useEffect } from "react";
import useSWR from "swr";
import { Pagination, Accordion } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import ListingDetails from "@/components/ListingDetails";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data } = useSWR(
    `https://web-422-assignment-lovat.vercel.app/api/listings?page=${page}&perPage=10`
  );
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    if (data) setPageData(data);
  }, [data]);

  return (
    <>
      <PageHeader text="Browse Listings: Sorted by Ratings" />
      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item key={listing._id} eventKey={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - {listing.location}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </>
  );
}
