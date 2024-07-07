export default function LoDeSanzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block w-10/12 max-w-3xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}