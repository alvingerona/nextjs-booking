export const Card1 = ({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-100 py-6">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          <div className="pb-6 pt-4">
            <h3 className="text-2xl font-medium leading-6 text-gray-900">
              {title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{body}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  </div>
);
