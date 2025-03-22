import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Card = ({ course, likedCourses, setLikedCourses }) => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);

    function clickHandler(event) {
        event.stopPropagation(); // Prevents navigation when clicking the like button

        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like removed");
        } else {
            setLikedCourses((prev) => [...prev, course.id]);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div 
            className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => navigate(`/course/${course.id}`)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative">
                <img src={course.image.url} className="w-full h-48 object-cover" alt={course.title} />

                {/* Like Button */}
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? 
                            <FcLike fontSize="1.75rem" /> : 
                            <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {course.description.length > 100 ? course.description.substr(0, 100) + "..." : course.description}
                </p>
            </div>

            {/* Hover Effect: Up Arrow */}
            <div className={`absolute bottom-2 right-2 text-xl transition-all ${hovered ? 'text-red-500' : 'text-gray-400'}`}>
                ↑
            </div>
        </div>
    );
};

export default Card;
