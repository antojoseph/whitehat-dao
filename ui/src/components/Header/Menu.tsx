import React, {ChangeEvent, ReactElement, useState} from 'react'
import Link from 'next/link'
import loadable from '@loadable/component'
import Logo from '@shared/atoms/Logo'
import UserPreferences from './UserPreferences'
import styles from './Menu.module.css'
import {useRouter} from 'next/router'
import {useMarketMetadata} from '@context/MarketMetadata'
import Button from "@shared/atoms/Button";
import Modal from "@shared/atoms/Modal";
import Input from "@shared/FormInput";
import Loader from "@shared/atoms/Loader";
import {useWeb3} from "@context/Web3";
import {AbiItem} from "web3-utils/types";
import {auditorDAOAddresses, auditorDaoAbi, companyFactoryDao, companyFactoryDaoAbi, bountyFactory, bountyFactoryAbi, companyDaoAbi} from "../../../app.config";
import Alert from "@shared/atoms/Alert";

const Wallet = loadable(() => import('./Wallet'))

declare type MenuItem = {
    name: string
    link: string
}

function MenuLink({item}: { item: MenuItem }) {
    const router = useRouter()

    const classes =
        router?.pathname === item.link
            ? `${styles.link} ${styles.active}`
            : styles.link

    return (
        <Link key={item.name} href={item.link}>
            <a className={classes}>{item.name}</a>
        </Link>
    )
}


export default function Menu(): ReactElement {
    const {siteContent} = useMarketMetadata()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isDialogLoaded, setIsDialogLoaded] = useState(false)
    const [companyDaoAddresses, setCompanyDaoAddresses] = useState([])
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const [isSignupOpenLoading, setIsSignupOpenLoading] = useState(true)
    const [bugBountyTitle, setBugBountyTitle] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");
    const [selectedDao, setSelectedDao] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [bugBountyDescription, setBugBountyDescription] = useState("")
    const [isAlert, setIsAlert] = useState({})
    const { accountId, web3 } = useWeb3()


    async function submitRoleSubmission(e) {
        e.preventDefault();
        setIsDialogLoaded(false);

        try{ 
            const contract = new web3.eth.Contract(auditorDaoAbi, selectedDao, {
                from: accountId
            });

            const registerResponse = await contract.methods.registerAsHacker().send({from: accountId});
            console.log("Register response", registerResponse);
            setIsAlert(
                {
                    text: "Hacker Profile Created",
                    type: "success",
                }
            )
        
        } catch(e) {
            console.log(e);
            setIsAlert(
                {
                    text: "Failed to Create Hacker Profile",
                    type: "failure",

                }
            )
        }
        
        setIsDialogLoaded(true);
    }

    async function submitDetails(e) {
        e.preventDefault();
        setIsDialogLoaded(false);
        const contract = new web3.eth.Contract(bountyFactoryAbi, bountyFactory, {
            from: accountId
        });

        console.log("Address", selectedCompany);
        try{
            const resCreate = await contract.methods.addNewBounty(selectedCompany, selectedCompany, Math.floor(Date.now()),
                "testtttttttesttttttttesttttttt", 1223, bugBountyTitle, bugBountyDescription).send({from: accountId});

            console.log(resCreate);
            setIsAlert({
                text: "Bug Bounty Created",
                type: "success"
            });
        }
        catch (e) {
            console.log(e);
            setIsAlert({
                text: "Couldn't create BugBounty",
                type: "error"
            });
        }
        setIsDialogLoaded(true);
    }

    async function getContractAddress(){
        setIsDialogOpen(true);
        let companyFactoryContract = new web3.eth.Contract(companyFactoryDaoAbi, companyFactoryDao, {
            from: accountId
        });

        let displayList = ["select"].concat(await companyFactoryContract.methods.getCompanyDaos().call());

        setCompanyDaoAddresses(displayList);
        setIsDialogLoaded(true);

    }

    return (
        <nav className={styles.menu}>
            <Link href="/">
                <a className={styles.logo}>
                    <Logo noWordmark/>
                    <h1 className={styles.title}>{siteContent?.siteTitle}</h1>
                </a>
            </Link>

            <ul className={styles.navigation}>
                {siteContent?.menu.map((item: MenuItem) => (
                    <li key={item.name}>
                        <MenuLink item={item}/>
                    </li>
                ))}

                <li key="123">
                    <a className={styles.link} onClick={() => getContractAddress()}>
                        Create Bug Bounty
                    </a>
                    <Modal
                        title={"New Bug Bounty"}
                        isOpen={isDialogOpen}
                        onToggleModal={() => setIsDialogOpen(false)}
                    >
                        <p>
                            Please enter the relevant Bounty fields in below and hit submit once ready to deploy.
                        </p>
                        <div className={styles.meta}>

                            {isAlert.text ? <Alert text={isAlert.text} state={isAlert.type} /> : ""}
                            <br/><br/>
                            {!isDialogLoaded ? <Loader /> : <form>
                                    <Input
                                        name="company"
                                        label="Company Dao"
                                        help="The Company DAO you want to create the bounty under"
                                        type="select"
                                        value={selectedCompany}
                                        options={companyDaoAddresses}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                            setSelectedCompany(e.target.value)
                                        }
                                        size="small"
                                    />

                                    <Input
                                        name="title"
                                        label="Bug Bounty program"
                                        help="The title of the Bug Bounty Program"
                                        type="text"
                                        value={bugBountyTitle}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                            setBugBountyTitle(e.target.value)
                                        }
                                        size="small"
                                    />
                                    <Input
                                        name="description"
                                        label="Bug Bounty program description"
                                        help="The Description of the Bug Bounty Program"
                                        type="textarea"
                                        value={bugBountyDescription}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                            setBugBountyDescription(e.target.value)
                                        }
                                        size="small"
                                    />

                                    <Button style="text" size="small" onClick={(e) => submitDetails(e)}>
                                        Submit New Program
                                    </Button>
                                </form>
                            }
                        </div>
                    </Modal>
                </li>
                <li key="124">
                    <a className={styles.link} onClick={() => setIsSignupOpen(true)}>
                        Signup!
                    </a>
                    <Modal
                        title={"Signup To Join the WhiteHat DAO!"}
                        isOpen={isSignupOpen}
                        onToggleModal={() => setIsSignupOpen(false)}
                    >
                       
                    <div className={styles.meta}>
                    {isAlert.text ? <Alert text={isAlert.text} state={isAlert.type} /> : ""}

                    <br/><br/>
                    <p> Please specify the role which you'd like an SBT minted for and press Submit</p>
                    {!isDialogLoaded ? <Loader /> : <form>
                    <Input
                                name="auditor Dao"
                                label="Auditor Dao"
                                help="The Auditor DAO you want to register under"
                                type="select"
                                value={selectedDao}
                                options={["select"].concat(auditorDAOAddresses)}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                    setSelectedDao(e.target.value)
                                }
                                size="small"
                            />
                            <Input
                                name="role"
                                label="Role"
                                help="The Role which you are applying for"
                                type="select"
                                value={selectedRole}
                                options={["select", "hacker"]} // TODO - Pass in other roles
                                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                    setSelectedRole(e.target.value)
                                }
                                size="small"
                            />
                            <Button style="text" size="small" onClick={(e) => submitRoleSubmission(e)}>
                                Submit
                            </Button>
                        </form>
                    }
                    </div>
                    </Modal>
                </li>
            </ul>

            <div className={styles.actions}>
                {/*<SearchBar />*/}
                {/*<Networks />*/}
                <Wallet/>
                <UserPreferences/>
            </div>
        </nav>
    )
}
