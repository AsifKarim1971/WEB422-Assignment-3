import Link from "next/link";
import { Card } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import ListingDetails from "@/components/ListingDetails";

export async function getStaticProps() {
  const response = await fetch(
    "https://web-422-assignment-lovat.vercel.app/api/listings/67b0cfd27589232f521f55e1"
  );
  const listing = await response.json();

  return {
    props: { listing },
  };
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer" />
      <Card>
        <Card.Body>
          <p>
            Hello! I&rsquo;m Md Asif Karim, a developer passionate about
            building web applications.
          </p>
          <p>Here&rsquo;s a listing from our database:</p>
        </Card.Body>
      </Card>
      <ListingDetails listing={listing} />
    </>
  );
}
