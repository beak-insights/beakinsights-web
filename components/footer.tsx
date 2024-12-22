import Link from "next/link"


export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Beak Insights is a cutting-edge data design and development firm committed to transforming raw data into actionable insights.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Data and Analytics</li>
              <li>Development Services</li>
              <li>Generative AI Solutions</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Projects</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>BeakDash</li>
              <li>Felicity LIMS</li>
              <li>Felicity LabLink</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@beakinsights.com</li>
              <li>+263 776 406 399</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Beak Insights. All rights reserved. Built by{" "}
            <Link
              href="https://www.aurthurm.com"
              className="font-medium underline underline-offset-4"
            >
              Aurthur Musendame
            </Link>
        </div>
      </div>
    </footer>
  );
}