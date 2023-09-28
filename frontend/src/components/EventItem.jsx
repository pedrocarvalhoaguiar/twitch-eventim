export default function EventItem({event}) {

    

    return (
        <li key={event?.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={event.title} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{event.title}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{event.title}</p>
                </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{event.title}</p>
                {event.isSubscribed ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                        Last seen <time dateTime={event.title}>{event.title}</time>
                    </p>
                ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">Inscreva-se</p>
                    </div>
                )}
            </div>
        </li>
    )
}