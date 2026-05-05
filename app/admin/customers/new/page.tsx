import NewCustomerForm from "./NewCustomerForm";

export const dynamic = "force-dynamic";

export default function NewCustomerPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold text-slate-900">New customer</h1>
      <NewCustomerForm />
    </div>
  );
}
