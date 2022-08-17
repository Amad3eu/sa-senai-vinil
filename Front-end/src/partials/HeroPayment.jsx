import ToggleButton from "../utils/ToggleButton"
import { useState } from "react";

function HeroPayment() {
    const [field, setField] = useState();

    return (
        <div className="dark:bg-[#151617] min-h-screen max-w-full flex-wrap">
            <div className="flex flex-col items-center justify-center pt-28 border-white p-12">
                <p className="dark:text-white text-black text-3xl whitespace-nowrap md:text-5xl pb-12 font-inter font-bold">Finish your purchase</p>
                <form>
                    <div className="flex flex-col dark:text-white text-black font-inter font-semibold">
                        <label className="text-md">Select the payment method</label>
                        <select onChange={(e) => setField(e.target.value)} className='mt-2 rounded-lg dark:bg-neutral-800'>
                            <option>Credit card</option>
                            <option>Debit card</option>
                            <option>PayPal</option>
                            <option>Pix Key</option>
                        </select>
                        {field === 'Credit card' && (<div className="mt-4 grid grid-cols-2 grid-flow-cols gap-12">
                            <div className="flex flex-col"><label className="mb-2">Card number</label>
                            <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border" type="text" />
                            <label className="mb-2 mt-3">CVV</label>
                            <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border" type="text" />
                        </div>
                            <div className="flex flex-col">
                                <label className="mb-2">Validate</label>
                                <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border" type="text" />
                                <label className="mb-2 mt-3">Password</label>
                                <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border" type="text" />
                            </div></div>)}
                        {field === 'Debit card' &&  (<div className="mt-4 grid grid-cols-2 grid-flow-cols gap-12">
                            <div className="flex flex-col"><label className="mb-2">Card number</label>
                            <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border" type="text" />
                            <label className="mb-2 mt-3">CVV</label>
                            <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border" type="text" />
                        </div>
                            <div className="flex flex-col">
                                <label className="mb-2">Validate</label>
                                <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border" type="text" />
                                <label className="mb-2 mt-3">Password</label>
                                <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border" type="text" />
                            </div></div>)}
                        {field === 'Pix Key' && (<div className="mt-4">Here is your pix key</div>)}
                        {field === 'PayPal' && (<div className="mt-4">Talvez</div>)}
                        <label className="text-lg pt-8 mb-2">
                            Adress
                        </label>
                        <input className="h-8 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border mb-4" type="text" />
                        <div className="flex flex-row">
                        <input className='' type="checkbox" value="Wrap up like a gift" id="" />
                        <label className="-mt-1 pl-2 dark:text-white text-black">Wrap up to a gift ?</label>
                        </div>
                        <input className='h-10 rounded-lg dark:bg-[#151617] dark:border-neutral-200 border-neutral-900 border mt-4' type="submit" />
                    </div>

                </form>
            </div>
            <div className="absolute md:flex px-4 font-medium text-gray-600 hover:text-gray-900 flex items-center transition duration-150 ease-in-out sm:mt-0">
                <ToggleButton></ToggleButton>
            </div>
        </div>
    )
}

export default HeroPayment