import { useState, useEffect } from 'react';
import { listTable } from "../API/module/listTable";

export default function AdminView() {
  const [athletes, setAthletes] = useState([]);
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);


  const userData = async () => {
    const response = await listTable();
    setAthletes(response.data);
    sumGold(response.data);
    sumSilver(response.data);
    sumBronze(response.data);
  }

  async function sumGold(players) {
    let totalMedal = 0;
    await players.map(athlete => {
      totalMedal = totalMedal + athlete.gold;
      return totalMedal;
    });
    setGoldMedal(totalMedal);
  }

  async function sumSilver(players) {
    let totalMedal = 0;
    await players.map(athlete => {
      totalMedal = totalMedal + athlete.silver;
      return totalMedal;
    });
    setSilverMedal(totalMedal);
  }

  async function sumBronze(players) {
    let totalMedal = 0;
    await players.map(athlete => {
      totalMedal = totalMedal + athlete.bronze;
      return totalMedal;
    });
    setBronzeMedal(totalMedal);
  }

  useEffect(() => {
    userData();
  }, []);


  return (
    <div>
      <div className="container">
        <h2 className="text-center py-5">List of Athletes</h2>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="navAthlete-tab" data-bs-toggle="tab" data-bs-target="#navAthlete"
              type="button" role="tab" aria-controls="navAthlete" aria-selected="true">Athlete's Table</button>
            <button class="nav-link" id="navCategories-tab" data-bs-toggle="tab" data-bs-target="#navCategories"
              type="button" role="tab" aria-controls="navCategories" aria-selected="false">Categories</button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="navAthlete" role="tabpanel" aria-labelledby="navAthlete-tab">

            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Athlete</th>
                  <th scope="col">Age</th>
                  <th scope="col">Country</th>
                  <th scope="col">Year</th>
                  <th scope="col">Date</th>
                  <th scope="col">Sport</th>
                  <th scope="col">Gold</th>
                  <th scope="col">Silver</th>
                  <th scope="col">Bronze</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>

                {
                  athletes.map(athlete => (
                    <tr key={athlete.id}>
                      <td className="align-middle">{athlete.athlete}</td>
                      <td className="align-middle">{athlete.age}</td>
                      <td className="align-middle">{athlete.country}</td>
                      <td className="align-middle">{athlete.year}</td>
                      <td className="align-middle">{athlete.date}</td>
                      <td className="align-middle">{athlete.sport}</td>
                      <td className="align-middle">{athlete.gold}</td>
                      <td className="align-middle">{athlete.silver}</td>
                      <td className="align-middle">{athlete.bronze}</td>
                      <td className="align-middle">{athlete.total}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div class="tab-pane fade" id="navCategories" role="tabpanel" aria-labelledby="navCategories-tab">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" className="medal-gold">Total Gold</th>
                  <th scope="col" className="medal-silver">Total Silver</th>
                  <th scope="col" className="medal-bronze">Total Bronze</th>
                </tr>
              </thead>
              <tbody>
                {
                  goldMedal &&
                  <tr>
                    <td className="align-middle">
                      <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#goldMedal">
                        {goldMedal}
                      </button>
                    </td>
                    <td className="align-middle">
                      <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#silverMedal">
                        {silverMedal}
                      </button>
                    </td>
                    <td className="align-middle">
                      <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#bronzeMedal">
                        {bronzeMedal}
                      </button>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
            {/*<!-- gold medal Modal -->*/}
            <div class="modal fade" id="goldMedal" tabindex="-1" aria-labelledby="goldMedalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="goldMedalLabel">Gold Medal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>A gold medal is a medal awarded for highest achievement in a non-military field. Its name derives
                      from
                      the use of at least a fraction of gold in form of plating or alloying in its manufacture.</p> <br />

                    <p>Since the eighteenth century, gold medals have been awarded in the arts, for example, by the Royal
                      Danish Academy of Fine Arts, usually as a symbol of an award to give an outstanding student some
                      financial freedom. Others offer only the prestige of the award. Many organizations now award gold
                      medals
                      either annually or extraordinarily, including various academic societies.</p> <br />

                    <p>While some gold medals are solid gold, others are gold-plated or silver-gilt, like those of the
                      Olympic
                      Games, the Lorentz Medal, the United States Congressional Gold Medal and the Nobel Prize medal. Nobel
                      Prize medals consist of 18 karat green gold plated with 24 karat gold. Before 1980 they were struck in
                      23 karat gold.</p> <br />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Silver Medal Modal -->*/}
            <div class="modal fade" id="silverMedal" tabindex="-1" aria-labelledby="silverMedalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="silverMedalLabel">Silver Medal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>A silver medal in sports and other similar areas involving competition is a medal made of, or plated
                      with, silver awarded to the second-place finisher, or runner-up, of contests or competitions such as
                      the Olympic Games, Commonwealth Games, etc. The outright winner receives a gold medal and the third
                      place a bronze medal. More generally, silver is traditionally a metal sometimes used for all types of
                      high-quality medals, including artistic ones.</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Bronze Medal Modal -->*/}
            <div class="modal fade" id="bronzeMedal" tabindex="-1" aria-labelledby="bronzeMedalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="bronzeMedalLabel">Bronze Medal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>A bronze medal in sports and other similar areas involving competition is a medal made of bronze
                      awarded to the third-place finisher of contests or competitions such as the Olympic Games,
                      Commonwealth Games, etc. The outright winner receives a gold medal and the second place a silver
                      medal. More generally, bronze is traditionally the most common metal used for all types of
                      high-quality medals, including artistic ones. The practice of awarding bronze third place medals began
                      at the 1904 Olympic Games in St. Louis, Missouri, before which only first and second places were
                      awarded.</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
