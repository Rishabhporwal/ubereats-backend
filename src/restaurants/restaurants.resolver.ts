import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurentService: RestaurantService) {}

  @Query(() => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurentService.getAll();
  }

  @Mutation(() => Boolean)
  async createRestaurant(
    @Args() createRestaurantDto: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurentService.createRestaurant(createRestaurantDto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
