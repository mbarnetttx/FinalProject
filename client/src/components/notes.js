state = {

        donations: [],
        eventData: [],
        
    }

    cleanData = (data) => {

        let tempObject = {};
        let tempArray = [];

        data.forEach(event => {
            tempObject = { title: event.eventName, date: event.eventDate, url: "/donations/" + event._id }
            tempArray.push(tempObject);

        })

        this.setState({ eventData: tempArray })
    }

    componentDidMount() {
        console.log(window.location.pathname)
        API.allDonations()
            .then(res =>
                this.setState({ donations: res.data }, () => {
                    this.cleanData(this.state.donations)
                }),
            )

            .catch(err => console.log(err))
    }