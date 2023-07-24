import profileNotifier from '../images/profile-notification.png'
import Link from "next/link";
export default function Header() {
    return (
        <header className='sticky top-0 z-10 bg-[#fff]'>
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <Link className="text-5xs font-black text-black" href='/'>codedamn</Link>
                    <div className="essentials flex items-center gap-8">
                        <div class="relative border-zink-100 border-solid border-2 rounded-[10px]">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z" fill="#71717A" />
                                </svg>

                            </div>
                            <input type="text" id="input-group-1" class="pl-10 pr-[110px] py-2.5 border-opacity-0 text-black rounded-[10px]" placeholder="Search" />

                            <select name="search-dropdown" className="focus:outline-none absolute inset-y-0 right-0 flex items-center bg-zink-100 rounded-[8px] m-[5px] px-[8px] py-[4px] text-zink-500">
                                <option value="Courses">Courses</option>
                                <option value="Option 2">Option 2</option>
                            </select>
                        </div>
                        <div className="flash flex cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2309 11.0814C20.2031 10.9605 20.1457 10.8484 20.0639 10.7552C19.9821 10.6619 19.8784 10.5904 19.7622 10.5471L14.3622 8.52206L15.7309 1.65018C15.7624 1.491 15.742 1.32593 15.6729 1.17915C15.6037 1.03237 15.4893 0.911604 15.3465 0.834557C15.2023 0.757845 15.0368 0.73096 14.8757 0.75809C14.7146 0.785219 14.567 0.864839 14.4559 0.984557L3.95591 12.2346C3.86987 12.3238 3.80762 12.4333 3.77486 12.5528C3.7421 12.6724 3.73988 12.7983 3.76841 12.9189C3.79776 13.0392 3.8557 13.1505 3.93731 13.2436C4.01892 13.3366 4.12178 13.4085 4.23716 13.4533L9.63716 15.4783L8.2684 22.3502C8.23693 22.5094 8.25726 22.6744 8.32644 22.8212C8.39561 22.968 8.50998 23.0888 8.65278 23.1658C8.76042 23.2201 8.8791 23.249 8.99965 23.2502C9.10154 23.2506 9.20241 23.23 9.29597 23.1897C9.38953 23.1494 9.47377 23.0902 9.54341 23.0158L20.0434 11.7658C20.1294 11.6765 20.1917 11.5671 20.2245 11.4475C20.2572 11.328 20.2594 11.2021 20.2309 11.0814V11.0814Z" fill="#6366F1" />
                            </svg>
                            <p className="ml-2">2</p>
                        </div>
                        <div className="notification relative">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26904 9.75001C5.26779 8.86087 5.44246 7.98026 5.783 7.15891C6.12354 6.33757 6.62321 5.5917 7.25323 4.96429C7.88326 4.33688 8.63119 3.84031 9.45395 3.5032C10.2767 3.16608 11.158 2.99507 12.0472 3.00001C15.7597 3.02814 18.7315 6.11251 18.7315 9.83439V10.5C18.7315 13.8563 19.4347 15.8063 20.0534 16.875C20.1191 16.9888 20.1538 17.1179 20.1539 17.2494C20.154 17.3808 20.1196 17.5099 20.0541 17.6239C19.9886 17.7378 19.8943 17.8325 19.7806 17.8985C19.667 17.9646 19.538 17.9996 19.4065 18H4.59404C4.46261 17.9996 4.33361 17.9646 4.21996 17.8985C4.10632 17.8325 4.01201 17.7378 3.9465 17.6239C3.88099 17.5099 3.84656 17.3808 3.84668 17.2494C3.8468 17.1179 3.88145 16.9888 3.94716 16.875C4.56591 15.8063 5.26904 13.8563 5.26904 10.5V9.75001Z" stroke="#71717A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18" stroke="#71717A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-[#EC4899] text-zink-100 rounded-full absolute top-[-10px] right-[-22px]">9</span>
                        </div>
                        <Link className="profile-notifier" href='/profile_portfolio'>
                            <img src={profileNotifier.src} alt="profile notification" className='h-[42px] w-[42px] -mt-2' />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
