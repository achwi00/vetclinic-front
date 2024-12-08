import React, {useContext, useEffect, useState} from "react";
import SideMenu from "../../component/SideMenu";
import Box from "../../component/Box";
import List from "../../component/List";
import {UserContext} from "../../UserContext";

function DashboardMyPetGroups(){
    const {user} = useContext(UserContext);
    const mail = user.email;
    const [boxes, setBoxes] = useState([]); // State to store fetched pet data
    const [isLoading, setIsLoading] = useState(true); // State for loading indicator

    const buttons = [
        {label: 'New visit', href:'/dashboard/new-visit'},
        {label: 'My pets', href:'/dashboard/my-pets'},
        {label: 'My pet groups', href:'/dashboard/my-pet-groups'},
        {label: 'Visits', href:'/dashboard/visits'},
    ]

    useEffect(() => {
        // Fetch data from the endpoint
        const fetchPets = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/pet-group?email=${mail}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );// Replace with actual endpoint
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();
                // Map the fetched data to your desired box format
                const mappedBoxes = data.map(pet => ({
                    iconName: 'group', // Assuming all pets use the same icon for now
                    title: pet.name,
                    descrPart1: `${pet.type}`,
                    descrPart2: pet.breed || '',
                    navigateTo: '/dashboard/pet'
                }));
                const addNew = {
                    iconName: 'plus', // Custom icon
                    title: 'Add new pet group', // Custom title
                    navigateTo: '/dashboard/new-pet'
                };
                mappedBoxes.unshift(addNew);

                console.log(mappedBoxes);
                setBoxes(mappedBoxes); // Update the state with fetched data
            } catch (error) {
                console.error("Failed to fetch pets:", error);
            } finally {
                setIsLoading(false); // Stop the loading spinner
            }
        };

        fetchPets();

    }, []);

    return(
        <div className="all-holder">
            <SideMenu buttons={buttons}/>
            <div className="content-holder">
                <div className="centring-main">
                    <h2 className="site-tracker">My pets</h2>
                    {isLoading ? (
                        <div className="loading">Loading pet groups...</div>
                    ) : (
                        // Render the List component with fetched data
                        <List
                            items={boxes.map((box, index) => (
                                <Box
                                    key={index}
                                    title={box.title}
                                    iconName={box.iconName}
                                    iconStyle="service-icon"
                                    descrPart1={box.descrPart1}
                                    descrPart2={box.descrPart2}
                                    styleClass="box pet"
                                    titleStyle="pet-name"
                                    descrStyle="pet-description"
                                    navigateTo={box.navigateTo}
                                />
                            ))}
                            styleClass="pet-holder"
                            itemsPerPage={6}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
export default DashboardMyPetGroups;