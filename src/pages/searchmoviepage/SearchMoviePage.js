import React from "react";
import {useForm} from "react-hook-form";

function SearchMoviePage() {
    return (
        <>
            <div>SearchMoviePage</div>
            <section>
                <form>
                        <label>
                            <input/>
                        </label>
                        <label>
                            <input/>
                        </label>
                        <label>
                            <input/>
                        </label>
                    <button>
                        Find
                    </button>
                </form>
            </section>

            <section>
                <div> Title:
                    <p>[Title]</p>
                </div>
                <div> Year:
                    <p>[Year]</p>
                </div>
            </section>
        </>
    )
}

export default SearchMoviePage;