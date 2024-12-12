export function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}